import { CollectionSearch } from "@/components/ui/CollectionSearch/CollectionSearch";
import { ApiError } from "@/components/ui/ApiError/ApiError";
import { DirectCommandTabs } from "@/components/DirectCommandTabs/DirectCommandTabs";
import { t } from "../../../i18n";

import { useMobilePagination } from "@/hooks/collections/useMobilePagination";


import { useIsMobile } from "@/hooks/useIsMobile";
import { useCommandEditor } from '@/hooks/command/useCommandEditor';
import { CommandDetails } from "@/types/commandTypes";

import { Card } from '@/components/Card/Card';
import { ListSkeleton } from "@/components/ui/ListSkeleton/ListSkeleton";
import { Button } from '@/components/ui/Button/Button';
import { Pagination } from '@/components/ui/Pagination/Pagination';
import { MobileHeader } from '@/components/MobileHeader/MobileHeader'
import { NavigationTabs } from '@/components/NavigationTabs/NavigationTabs';
import { BottomSlideButton } from '@/components/ui/BottomSlideButton/BottomSlideButton';
import { CommandActionsSheet } from '@/components/CommandActionsSheet/CommandActionsSheet';
import { CommandDirectModal } from '@/components/CommandEditorModal/CommandEditorDirectModal';

import styles from "@/pages/GlobalsPage.module.scss";

const createEmptyCommand = (): CommandDetails => ({
  status: true,
  title: "",
  directControl: {
    mappingType: "",
    valueType: "",
    voiceCommands: [""],
    manual: false,
    subDirectControl: "",
    subDirectControlTitle: "",
  },
});

export const CommandDirectPage = () => {
  const isMobile = useIsMobile();

  const { query, setQuery, feedback, listError, commands, loading, loadCommands, modalOpen, setModalOpen, isEdit, formData, setFormData,
    actionsCommand, setActionsCommand, openCreateModal, openEditModal, handleToggleStatus, handleDelete, handleCreate, handleUpdate } = useCommandEditor("direct", createEmptyCommand);

  const ref = useMobilePagination(commands, loading || Boolean(listError), loadCommands, isMobile);

  return (
    <>
      <MobileHeader
        search={{ value: query, onChange: setQuery }}
        beforeSearch={<DirectCommandTabs />}
        title={"Прямые команды"}
      />

      <div className={styles.page}>
        {!modalOpen && <ApiError {...feedback} />}
        {!isMobile ? <NavigationTabs /> : <></>}


        <div className={`${styles.header} ${styles.collectionHeader}`}>
          <div className={styles.heading}>
            {!isMobile ? <h1 className={styles.title}>{t("Прямые команды")}</h1> : <></>}

            {!isMobile && <DirectCommandTabs />}

          </div>

          <div className={styles.actions}>
            {!isMobile ? (
              <Button variant="primary" onClick={openCreateModal}>{t("🞢 Добавить сценарий")}</Button>
            ) : (
              <BottomSlideButton>
                <Button variant="primary" onClick={openCreateModal}>{t("Добавить сценарий")}</Button>
              </BottomSlideButton>
            )}
          </div>
          {!isMobile && <CollectionSearch value={query} onChange={setQuery} />}
        </div>

        <div className={styles.list}>
          <ListSkeleton loading={loading} itemCount={commands?.data.length ?? 0} append={isMobile}>
          {commands?.data.map((command) => (
            <Card
              key={command.uuid}
              title={command.title}
              subTitle={command.status === false ? "Выключена" : "Включена"}
              onClick={() => setActionsCommand(command)}
            />
          ))}
          </ListSkeleton>
          {!loading && !listError && query.trim() && !commands?.data.length && <p role="status">{t("Ничего не найдено")}</p>}
        </div>

        {!isMobile ?
          <Pagination
            page={commands?.page || 1}
            totalPages={commands?.total_pages || 1}
            onChange={(page) => loadCommands(page)}
          /> :
          <div ref={ref} className={styles.listSentinel} />
        }

        <CommandDirectModal
          feedback={feedback}
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          title={isEdit ? t("Редактировать прямую команду") : t("Создать прямую команду")}
          formData={formData}
          setFormData={setFormData}
          onSave={isEdit ? handleUpdate : handleCreate}
        />

        <CommandActionsSheet
          open={!!actionsCommand}
          command={actionsCommand}
          onClose={() => setActionsCommand(null)}
          onToggleStatus={handleToggleStatus}
          onDelete={handleDelete}
          onEdit={(uuid) => openEditModal(uuid)}
        />

      </div>

    </>
  );
};
