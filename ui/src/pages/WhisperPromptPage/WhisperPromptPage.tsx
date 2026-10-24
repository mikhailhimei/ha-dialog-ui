import { WhisperPromptForm } from "../../components/WhisperPromptForm/WhisperPromptForm";
import { MobileHeader } from "../../components/MobileHeader/MobileHeader";
import { NavigationTabs } from "../../components/NavigationTabs/NavigationTabs";
import { useIsMobile } from "../../hooks/useIsMobile";
import { t } from "../../i18n";
import styles from "../GlobalsPage.module.scss";

export function WhisperPromptPage() {
  const isMobile = useIsMobile();
  return <>
    <MobileHeader title="Промпт распознавания" />
    <div className={styles.page}>
      {!isMobile && <NavigationTabs />}
      <div className={`${styles.header} ${styles.collectionHeader}`}>
        <div className={styles.headerTop}>
          <div className={styles.heading}>
            {!isMobile && <h1 className={styles.title}>{t("Промпт распознавания")}</h1>}
          </div>
        </div>
      </div>
      <WhisperPromptForm />
    </div>
  </>;
}
