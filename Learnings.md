**Learnings 1**

1. Server Components 

Learn about Next.js server component: The Server Components in Next.js allow you to write code that runs on the server-side, and the results are sent to the client. This can be particularly useful for parts of your page that do not need client-side interactivity and can be rendered once per request on the server. It can lead to better performance and less load on the client.

1. Client Components

Next.js Client Components are the part of the application that runs on the client side. Unlike Server Components, these can interact with the users' input, manage states, and be updated on the client side without requiring a server roundtrip. They are perfect for interactive parts of the page like forms or modals. They can be written using traditional React techniques and can be mixed with Server Components to build a complete application.\

1. App Routing

Next.js has a file-based routing system where files under the `pages` directory become routes in the application. For example, a file named `about.js` in the `pages` directory would be accessible at `yourwebsite.com/about`.

1. Dynamic Routing

Next.js supports dynamic routes, which are routes that depend on specific pieces of data. This is useful for parts of your application that display different content based on identifiers such as a unique ID, name, or other parameters. For example, a blog might use dynamic routing to display different posts. To create a dynamic route, you simply create a file in the `pages` directory with square brackets in the name, like `[id].js`. This file will then be used to render pages that match that pattern, and the value inside the brackets will be available inside your component as a parameter.

**Learnings 2**

1.  how to change title metadata using params
    1. {params.post.split('%20').join(" ")} used split and change the text with whitespace  
2. use of “use client””
    1. cant use react hooks without specifying client component in server component rendering
3. use of react - toastify 
    1. npm i  react-toastify
    2. <ToastContainer theme="dark"/>
    3. toast.success(res.data.msg);
4. use of **Tailwind CSS Table - Flowbite**
5. use of event of window as parameter
    1. e.target.value; , [e.target.name](http://e.target.name/); , e.preventDefault();
6. implementing to take input value of form in useState hook 
    
    ```
    const [formData,setformData] = useState({
            title:" ",
            description:" "
        })
    const onChangeHandler = (e) =>{
            const name = e.target.name;
            const value = e.target.value;
            setformData(form =>({...form,[name]:value}))
            console.log(formData);
        }
        <form onSubmit={onSubmitHandle} className=" flex items-start flex-col gap-2 w-[80%] max-w-[600px] mt-24 px-2 mx-auto">
          <input value={formData.title} onChange={onChangeHandler} type="text" name="title"  placeholder="Enter Title" className="px-3 py-2 border-2 w-full"   />
          <textarea value={formData.description} onChange={onChangeHandler}  name="description" placeholder="Enter Description" className="px-3 py-2 border-2 w-full" ></textarea>
          <button type="submit" className="bg-orange-600 py-3 px-11 text-white">Add TODO</button>
        </form>
    ```
    
7. use of thunder client extension 
    1. Thunder Client is a Visual Studio Code extension for testing APIs. You create requests in a simple file, send them, and see responses, all within VS Code. It's handy for quickly checking how your APIs work without leaving your coding environment.
8. how to create a schema and model in mongoose
    
    ```
    const { default: mongoose } = require("mongoose");
    
    const Schema = new mongoose.Schema({
        title:{
            type:String,
            required:true
        },
        description:{
            type: String,
            required: true
        },
        isCompleted:{
            type:Boolean,
            default:false
        }
    },{
        timeStamp:true
    })
    // creating more modals
    const TodoModal = mongoose.models.todo || mongoose.model('todo',Schema);
    
    export default TodoModal;
    ```
    
    1. create a database values in api in post by taking request 
        
        ```jsx
        export async function POST(request){
            const  { title,description } = await request.json();
            await TodoModal.create({
                title,
                description
            });
            return NextResponse.json({msg:"Todo Created"});
        }
        ```
        
    
    **Learnings 3**
    
    1. getting reponse and sending the payload
        
        ```jsx
        const response = await axios.post('/api',formData);
                    toast.success(response.data.msg);
        ```
        
    2. onclick will call itself not used under arrow function without clicking
        1. onClick={() => deleteTodo(mongoId)}  == right
        2. onClick={deleteTodo(mongoId)}  == wrong