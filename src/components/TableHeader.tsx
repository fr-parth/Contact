import '../styles/table-header.css'
export const TableHeader = () => {
    return (
        <div className="table-header">
            <p className="table-header-name">Name</p>
            <p className="table-header-email">Email</p>
            <p className="table-header-status">Status</p>
            <p className="table-header-action">Action</p>
        </div>
    )
}