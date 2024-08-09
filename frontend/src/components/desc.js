function Desc(props) {
    return (
        <>
            <dl>
                <dt>Title</dt>
                <dd>{props.title}<button>Update</button><button>Delete</button></dd>
                <dt>Description</dt>
                <dd>{props.desc}
                    <button>Update</button>
                    <button>Delete</button>
                </dd>
            </dl>
        </>
    )
}

export default Desc