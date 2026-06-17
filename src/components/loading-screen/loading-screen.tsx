export default function LoadingScreen(): React.ReactElement {
  return (
    <div className="loading-screen">
      <div className="spinner" />
      <p>Загрузка покемонов...</p>
    </div>
  );
}