import { assistantSettingTitle } from "@/utils/assistantSettingLabels";
import { ApiError } from "@/components/ui/ApiError/ApiError";
import { useApiFeedback } from "@/hooks/useApiFeedback";
import { t } from "../../../i18n";
import { useState } from "react";

import { useIsMobile } from "@/hooks/useIsMobile";
import { CommandSummary, CommandDetails } from '@/types/commandTypes';
import { useMobilePagination } from "@/hooks/collections/useMobilePagination";
import { useApiCommands } from '@/hooks/command/useApiCommands';

import { Card } from "@/components/Card/Card"
import { ListSkeleton } from "@/components/ui/ListSkeleton/ListSkeleton";
import { Pagination } from '@/components/ui/Pagination/Pagination';
import { MobileHeader } from '@/components/MobileHeader/MobileHeader'
import { NavigationTabs } from '@/components/NavigationTabs/NavigationTabs';
import { CommandSettingEditorModal } from '@/components/CommandSettingEditorModal/CommandSettingEditorModal';

import styles from "@/pages/GlobalsPage.module.scss";

export const CommandSettingsPage = () => {
  const action = useApiFeedback();
  const isMobile = useIsMobile();
  const [modalOpen, setModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [formData, setFormData] = useState<CommandDetails>({ title: "" });

  const {
    error: listError, retry: retryList,
    loading,
    loadCommands,
    getCommandDetails,
    updateCommand,
    commands

  } = useApiCommands("get_assistant_settings_short")

  const ref = useMobilePagination(commands, loading || Boolean(listError), loadCommands, isMobile);

  const feedback = { error: action.error ?? listError, busy: action.busy, retry: action.error ? action.retry ?? (() => { action.clearError(); retryList(); }) : retryList };

  const openEditModal = (command: CommandSummary) => action.run(async () => {
    setIsEdit(true);

    const response = await getCommandDetails("get_assistant_setting", command.uuid)

    setFormData(response.data);

    setModalOpen(true);
  }, { retryable: true });

  const handleUpdateCommand = () => action.run(async () => {
    await updateCommand("update_assistant_setting", formData)
    setModalOpen(false);
  }, { exclusive: true });

  return (
    <>
      <MobileHeader
        title={"Ответы по умолчанию"}
      />

      <div className={styles.page}>
        {!modalOpen && <ApiError {...feedback} />}
        {!isMobile ? <NavigationTabs /> : <></>}


        <div className={`${styles.header} ${styles.collectionHeader}`}>
          <div className={styles.headerTop}>
            <div className={styles.heading}>
              {!isMobile && <h1 className={styles.title}>{t("Ответы по умолчанию")}</h1>}
            </div>
          </div>
        </div>

        <div className={styles.list}>
          <ListSkeleton loading={loading} itemCount={commands?.data.length ?? 0} append={isMobile}>
          {commands?.data.map((command) => (
            <Card
              key={command.uuid}
              title={assistantSettingTitle(command)}
              onClick={() => openEditModal(command)}
            />
          ))}
          </ListSkeleton>
        </div>

        {!isMobile ?
          <Pagination
            page={commands?.page || 1}
            totalPages={commands?.total_pages || 1}
            onChange={(page) => loadCommands(page)}
          /> :
          <div ref={ref} className={styles.listSentinel} />
        }

        <CommandSettingEditorModal
          feedback={feedback}
          open={modalOpen}
          isEdit={isEdit}
          formData={formData}
          setFormData={setFormData}
          onClose={() => setModalOpen(false)}
          onUpdate={handleUpdateCommand}
        />

      </div>

    </>
  );
};
