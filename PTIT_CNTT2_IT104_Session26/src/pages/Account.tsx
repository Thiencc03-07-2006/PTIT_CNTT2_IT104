interface Props {
  onLogout: () => void;
}
export default function Account({ onLogout }: Props) {
  return (
    <div>
      <h1>Trang Account</h1>
      <button onClick={onLogout}>Dang xuat</button>
    </div>
  );
}
