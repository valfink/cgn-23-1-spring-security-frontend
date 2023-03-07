import useAuth from "../hooks/useAuth";

export default function ProtectedContent() {
    const user = useAuth(true);
    return !user ? null : (
      <h1>
          This is only visible for users that are logged in!
      </h1>
    );
}