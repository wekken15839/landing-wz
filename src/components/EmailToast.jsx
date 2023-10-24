"use client"
import toast, { Toaster } from 'react-hot-toast';
import { BsFillSendFill } from "react-icons/bs"

const notify = () => toast.success('¡Email enviado!', {
  style: {
    fontSize: "1.125rem"
  }
});

export default function EmailToast() {

  return (<>
    <button className="absolute right-2 top-1" onClick={notify}><BsFillSendFill /></button>
    <Toaster position="bottom-center"
      reverseOrder={false}
      gutter={8}
      containerClassName=""
      containerStyle={{ marginBottom: "60px" }}
      toastOptions={{
        // Define default options
        className: '',
        duration: 5000,
        style: {
          background: '#366DFA',
          color: '#fff',
          fontWeight: "bold"
        },

        // Default options for specific types
        success: {
          duration: 3000,
          theme: {
            primary: 'green',
            secondary: 'black',
          },
        },
      }} />
  </>);
};  