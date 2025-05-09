import { useDocumentTitle } from "../../shared/hooks/useDocumentTitle";

const NotFoundPage = () => {
    useDocumentTitle('Pet Shop - 404');
    return (
        <>
            <h1>NotFoundPage</h1>
        </>
    )
}
export default NotFoundPage;