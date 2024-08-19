import { useEffect, useState } from 'react';
import { createToDo, getAllToDo, delTodoById, updateTodoById } from '../actions/todoActions';

const Home = () => {
    const [data, setData] = useState({
        title: '',
        description: ''
    });

    const [allTodos, setAllTodos] = useState([]);



    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    const handleSubmit = () => {
        console.log("title", data.title);
        console.log("description", data.description);

        const body = {
            title: data.title,
            description: data.description
        };

        createToDo(body)
            .then((res) => {
                console.log('response', res);
                fetchTodo();
            })
            .catch((err) => {
                console.error(err);
            });

        setData({ title: '', description: '' });
    };

    const fetchTodo = () => {
        getAllToDo().then((res) => {
            setAllTodos(res.data);
            console.log(res.data);
        })
            .catch((err) => {
                console.error(err);
            });
    };

    const handleUpdate = async () => {
        const body = {
            title: data.title,
            description: data.description
        }
        const res = await updateTodoById(data.id, body)
        console.log('response', res)

        fetchTodo()
    }

    const handleValues = (el) => {
        setData({
            title: el.title,
            description: el.description,
            id: el._id
        })

    }

    const handleDelete = async (id) => {
        const res = await delTodoById(id)
        console.log('response: id deleted')
        fetchTodo()

    }

    return (
        <div>
            <label>Title</label>
            <input type="text" name="title" value={data.title} onChange={handleChange} /><br />

            <label>Description</label>
            <input type="text" name="description" value={data.description} onChange={handleChange} /><br />

            <button type="button" onClick={handleSubmit}>Submit</button>
            <button type="button" onClick={fetchTodo}>Get Todos</button>
            <button type="button" onClick={handleUpdate}>Update</button>



            <div>
                {
                    allTodos.map((el) => (
                        <div key={el._id} onClick={() => handleValues(el)}>
                            <div className='border border-secondary'>
                                <h3>Title: {el.title}</h3>
                                <p>ID: {el._id}</p>
                                <p>Description: {el.description}</p>
                                <button type="button" onClick={()=>handleDelete(el._id)}>Delete</button>
                            </div>
                        </div>
                    ))

                }
            </div>
        </div>
    );
};

export default Home