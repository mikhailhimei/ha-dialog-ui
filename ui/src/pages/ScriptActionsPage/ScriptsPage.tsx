import { CollectionSearch } from "@/components/ui/CollectionSearch/CollectionSearch";
import { useRemoteServerEnabled } from "../../context/RemoteServerContext";
import { ApiError } from "@/components/ui/ApiError/ApiError";
import { useApiFeedback } from "@/hooks/useApiFeedback";
import { t } from "../../i18n";
import { useState } from "react";
import { useMobilePagination } from "@/hooks/collections/useMobilePagination";

import {
  ScriptActionSummary,
  ScriptActionDetails,
} from '@/types/scripts';

import { useIsMobile } from "@/hooks/useIsMobile";
import { useApiScripts } from '@/hooks/scriptActions/useApiScripts';

import { Card } from '@/components/Card/Card';
import { Button } from '@/components/ui/Button/Button';
import { Pagination } from '@/components/ui/Pagination/Pagination';
import { ScriptActionsSheet } from "@/components/ScriptActionsSheet/ScriptActionsSheet";
import { ScriptFormModal } from '@/components/ScriptFormModal/ScriptFormModal';
import { MobileHeader } from '@/components/MobileHeader/MobileHeader';
import { NavigationTabs } from '@/components/NavigationTabs/NavigationTabs';
import { ListSkeleton } from "@/components/ui/ListSkeleton/ListSkeleton";
import { BottomSlideButton } from "@/components/ui/BottomSlideButton/BottomSlideButton"
import styles from "../GlobalsPage.module.scss";

export const ScriptsPage = () => {
  const action = useApiFeedback();
  const remoteEnabled = useRemoteServerEnabled();
  const pageTitle = remoteEnabled ? "Действия удалённых команд" : "Запуск скриптов";
  const isMobile = useIsMobile();

  const [selectedScript, setSelectedScript] =
    useState<ScriptActionDetails>();

  const [modalOpen, setModalOpen] =
    useState(false);

  const [modalSheet, setModalSheet] =
    useState(false)

  const [formInfo, setFormInfo] =
    useState<ScriptActionSummary>({ uuid: "", title: "" })

  const [isEdit, setIsEdit] =
    useState(false);

  const {
    query, setQuery, error: listError, retry: retryList,
    loading,
    scripts,

    getAvailableScripts,

    loadScripts,

    saveScript,
    updateScript,

    getScriptAction,
    deleteScriptAction,
  } = useApiScripts();

  const ref = useMobilePagination(scripts, loading || Boolean(listError), loadScripts, isMobile);

  const feedback = { error: action.error ?? listError, busy: action.busy, retry: action.error ? action.retry ?? (() => { action.clearError(); retryList(); }) : retryList };

  const openCreateModal = () => {
    action.clearError();
    setSelectedScript(undefined);

    setIsEdit(false);

    setModalOpen(true);
  };

  const openSheet = (script: ScriptActionSummary) => {
    setModalSheet(true)
    setFormInfo(script)
  }

  const openEditModal = (uuid: string) => action.run(async () => {
    setIsEdit(true);

    const data = await getScriptAction(
      uuid
    );

    setSelectedScript(data);

    setModalOpen(true);
  }, { retryable: true });

  const handleSaveScript = async (data: ScriptActionDetails) => {
    await action.run(async () => {
    if (isEdit) {

      if (!data.uuid) return;

      const { uuid, ...payload } = data;

      await updateScript(data.uuid, payload)
    } else {

      await saveScript(data)

    }

    setModalOpen(false)
    }, { exclusive: true });
  }

  const handleDeleteScript = (uuid: string) => action.run(async () => {
    if (!uuid) return

    await deleteScriptAction(uuid)
  }, { exclusive: true });

  return (
    <>

      <MobileHeader
        search={{ value: query, onChange: setQuery }}
        title={pageTitle}
      />
      <div className={styles.page}>
        {!modalOpen && <ApiError {...feedback} />}
        <NavigationTabs />

        <div className={`${styles.header} ${styles.collectionHeader}`}>
          <div className={styles.heading}>
            {!isMobile ?
              <h1 className={styles.title}>{t(pageTitle)}</h1> : <></>
            }

            <p className={styles.description}>{t(remoteEnabled ? "Выберите скрипт Home Assistant и укажите типы команд, приходящие с удалённого сервера. Типы вводятся вручную." : "Свяжите распознанную команду со скриптом Home Assistant. Выберите скрипт и задайте условия его запуска.")}</p>

          </div>

          <div className={styles.actions}>
            {!isMobile ? (
              <>
                <Button
                  variant="primary"
                  onClick={openCreateModal}
                >{t("🞢 Добавить сценарий")}</Button>
              </>
            ) : (
              <BottomSlideButton>
                <Button
                  variant="primary"
                  onClick={openCreateModal}
                >{t("Добавить сценарий")}</Button>
              </BottomSlideButton>
            )}
          </div>
          {!isMobile && <CollectionSearch value={query} onChange={setQuery} />}
        </div>

        <div className={styles.list}>
          <ListSkeleton loading={loading} itemCount={scripts?.script_actions.length ?? 0} append={isMobile}>
          {scripts?.script_actions.map((script) => (
            <Card
              key={script.uuid}
              title={script.title}
              subTitle="Нажмите для редактирования"
              onClick={() =>
                openSheet(script)
              }
            />
          ))}
          </ListSkeleton>
          {!loading && !listError && query.trim() && !scripts?.script_actions.length && <p role="status">{t("Ничего не найдено")}</p>}
          {isMobile ? <div ref={ref} className={styles.listSentinel} /> : <></>}
        </div>

        {!isMobile ?
          <Pagination
            page={scripts?.page || 1}
            totalPages={scripts?.total_pages || 1}
            onChange={loadScripts}
          /> : <></>
        }

        <ScriptActionsSheet
          uuid={formInfo.uuid}
          open={modalSheet}
          title={formInfo.title}
          onClose={() => setModalSheet(false)}
          onEdit={openEditModal}
          onDelete={handleDeleteScript}
        />

        <ScriptFormModal
          feedback={feedback}
          open={modalOpen}
          initialData={selectedScript}
          isEdit={isEdit}
          availableScripts={getAvailableScripts()}
          loading={loading}
          onCancel={() => setModalOpen(false)}
          onSave={async (data: ScriptActionDetails) => {
            await handleSaveScript(data);
          }}
        />
      </div>

    </>
  );
};
