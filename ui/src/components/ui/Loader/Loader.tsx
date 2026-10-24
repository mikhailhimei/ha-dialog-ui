import { ListSkeleton } from "../ListSkeleton/ListSkeleton";
import styles from "./Loader.module.scss";

interface LoaderProps {
  label?: string;
  fullscreen?: boolean;
}

/** Shared skeleton fallback for initial connection and route loading. */
export const Loader = ({ label = "Загрузка...", fullscreen = false }: LoaderProps) => (
  <div className={`${styles.loader} ${fullscreen ? styles.fullscreen : ""}`}>
    <ListSkeleton loading itemCount={0} placeholderCount={4} label={label} />
  </div>
);
