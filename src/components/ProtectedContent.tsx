import useAuth from "../hooks/useAuth";
import Layout from "./Layout";

export default function ProtectedContent() {
    const user = useAuth(true);
    return (
        <Layout>
            {!user ? null : (
                <h1>
                    This is only visible for users that are logged in!
                </h1>
            )}
        </Layout>
    );
}