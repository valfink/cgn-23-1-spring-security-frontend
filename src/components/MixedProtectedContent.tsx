import useAuth from "../hooks/useAuth";

export default function MixedProtectedContent() {
    const user = useAuth(false);

    return (
        <>
            <h1>This is visible for everybody</h1>
            {user && <h2>This is visible only for logged in users</h2>}
        </>
    );
}