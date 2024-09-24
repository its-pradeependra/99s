import { ImBin } from "react-icons/im";
import { useState, useEffect } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { formDatabase } from "../firebase";
import toast from "react-hot-toast";

export default function DashContactQuery() {
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    const fetchQueries = async () => {
      const querySnapshot = await getDocs(collection(formDatabase, "contacts"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setQueries(data);
    };

    fetchQueries();
  }, []);

  const deleteQuery = async (id) => {
    const docRef = doc(formDatabase, "contacts", id);

    try {
      await deleteDoc(docRef);
      toast.success("Query Deleted Successfully!!!");
      setQueries(queries.filter((query) => query.id !== id));
    } catch (error) {
      toast.error("Error Deleting Query");
      console.log(error);
    }
  };


  const [isEditing, setIsEditing] = useState(false);

  const handleClick = () => {
    setIsEditing(!isEditing);
  };



  return (
    <>
      <div className="md:mx-auto p-3 overflow-x-scroll pt-[30%] sm:pt-[3%]">
        <div className="overflow-x-scroll">
          <table className="w-full bg-white border border-gray-200 text-center">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-12 border-b">S.No.</th>
                <th className="py-2 px-12 border-b">Name</th>
                <th className="py-2 px-12 border-b">Number</th>
                <th className="py-2 px-12 border-b">Email</th>
                <th className="py-2 px-12 border-b">Message</th>
                <th className="py-2 px-12 border-b">Delete</th>
              </tr>
            </thead>
            {queries.length > 0 ? (
              <tbody>
                {queries.map((i, index) => (
                  <tr key={i.id} >
                    <td className="py-2 px-4 border-b">{index + 1}</td>
                    <td className="py-2 px-4 border-b">{i.name}</td>
                    <td className="py-2 px-4 border-b">{i.number}</td>
                    <td className="py-2 px-4 border-b text-blue-900">
                      <a href={`mailto:${i.email}`}>{i.email}</a>
                    </td>
                    <td> <div onClick={handleClick}>
                      {isEditing ? (
                        <textarea
                          className="line-clamp-1 border-2"
                          value={i.message}
                        />
                      ) : (
                        <p className="cursor-pointer line-clamp-1">{i.message}</p>
                      )}
                    </div></td>
                    <td className="text-center"> 
                      <button
                        className="text-red-600 transition-all ease-in-out duration-500 hover:-translate-y-1 hover:scale-10 cursor-pointer"
                        onClick={() => deleteQuery(i.id)}
                      >
                        <ImBin className="h-6 w-6" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            ) : (
              <tr className="text-center">
                <p>You have no Queries yet.</p>
              </tr>
            )}
          </table>
        </div>



      </div>
    </>
  );
}