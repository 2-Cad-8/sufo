import { useState } from "react";
import Table from "./components_sufo/table";


function App() {
  const [isOpenModal,setIsOpenModal]=useState(false)
  const[data,setData] =useState([{
      
      fecha:'12/10/2025',
      descripcion:'Modificacion de decreto 187/25, se modifico tabla de la base de datos',
      modulo:'Presupuesto de Gasto',
      opcion:'traslados',
      observaciones:''

  }, {
      fecha:'12/10/2025',
      descripcion:'Modificacion de decreto 187/25, se modifico tabla de la base de datos',
      modulo:'Presupuesto de Gasto',
      opcion:'traslados',
      observaciones:''

  }])


  return (
    <>
    <div className="flex justify-start top-0">
    <div className="hidden sm:block xl:w-1 ">
      <SideNavBar></SideNavBar>
    </div>


    <div className='flex flex-col items-center w-screen justify-start  '>
      <HeaderScreen title={'Actualizaciones'}></HeaderScreen>
      <div className="pt-10 ps-20">
      <Modal>
          <FormAddUpdate data={data} onSetData={setData}/>
      </Modal>
      <Table data={data}> </Table>

      </div>
    </div>
    </div>
   
    </>
  )
}
function HeaderScreen({title}){
  return(
    <div className=" flex items-center  w-full h-15 bg-green-700">
      <h1 className="xl:ps-70  text-white font-semibold text-2xl">{title}</h1>
    </div>

)
}

function Modal({children}){
  return(
    <>
    <div className="flex w-5xl  py-4 justify-start">
        <button className="btn bg-green-700 text-white" onClick={()=>document.getElementById('my_modal_1').showModal()}>Agregar</button>
      </div>
    
    <dialog id="my_modal_1" className="modal  ">
   <div className="modal-box ">
    {children}
  </div>
    </dialog>
    </>
    )
}

function SideNavBar(){
  return(
    <div className="drawer drawer-open">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
  </div>

  <div className="drawer-side is-drawer-close:overflow-visible">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <div className="is-drawer-close:w-14 is-drawer-open:w-64 bg-base-200 flex flex-col items-start min-h-full">
     
      {/* Sidebar content here */}
      <ul className="menu w-full grow">
        <li className="">
          
         <h1 className="font-bold text-2xl  text-green-700 is-drawer-close:hidden">SUFO</h1>
        <h1 className="font-bold text-2xl  text-green-700 is-drawer-open:hidden">S</h1>
          
        </li>
        {/* list item */}
        <li>
          <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="inline-block size-4 my-1.5"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
            <span className="is-drawer-close:hidden">Homepage</span>
          </button>
        </li>

        {/* list item */}
        <li>
          <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Settings">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="inline-block size-4 my-1.5"><path d="M20 7h-9"></path><path d="M14 17H5"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
            <span className="is-drawer-close:hidden">Settings</span>
          </button>
        </li>
      </ul>

      {/* button to open/close drawer */}
      <div className="m-2 is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Open">
        <label htmlFor="my-drawer-4" className="btn btn-ghost btn-circle drawer-button is-drawer-open:rotate-y-180">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="inline-block size-4 my-1.5"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
        </label>
      </div>

    </div>
  </div>
</div>
  )
}

function FormAddUpdate({data, onSetData}){
  const [register,setRegister]=useState({fecha:'',modulo:'',opcion:'',descripcion:'',observacion:''})
  
  console.log(register)
  const handleRegister= (e)=>{
    e.preventDefault()
    setRegister({...register,id:data[data.length-1].id+1})
    onSetData([...data,register])
    setRegister({fecha:'',modulo:'',opcion:'',descripcion:'',observacion:''})
  }
  return( 
    <>
  <div className='flex justify-between items-center'>
    
    <h3 className='pb-5 font-semibold text-2xl'>Agregar una nueva Actualizacion</h3>
   </div>
  <form className='flex flex-col gap-8 justify-center w-full' onSubmit={handleRegister}> 
      <input className='input w-full' type='date'name='fecha' value={register.fecha} onChange={(e)=>setRegister({...register,fecha:new Date(e.target.value).toLocaleDateString()})}/>
      <div className='flex gap-5'>
        
       
          <label className="select">
            <span className="label">Modulo</span>
        <select className='select' name='modulo' value={register.modulo} onChange={(e)=>setRegister({...register,modulo:e.target.value})}>
          <option value={'Seleccionar Modulo'}>Seleccionar Modulo</option>
          <option value={'Presupuesto de Gasto'}>Presupuesto de Gasto</option>
          <option value={'Presupuesto de Ingreso'}>Presupuesto de Ingreso</option>
          <option value={'Contabilidad Fiscal'}>Contabilidad Fiscal</option>
        </select>
          </label>
        <label className="input">
          <span className="label">Opcion</span>
          <input type="text" placeholder="Reportes: Estandar"  value={register.opcion} onChange={(e)=>setRegister({...register,opcion:e.target.value})}/>
        </label>
         </div>
      <textarea className='textarea w-full' placeholder='Descripción de la actualización'  value={register.descripcion} onChange={(e)=>setRegister({...register,descripcion:e.target.value})}/>
      <div className='flex gap-6'>
        <label className="input w-90">
          <span className="label">Observacion</span>
          <input type="text" placeholder="pendiente por resolver" value={register.observacion} onChange={(e)=>setRegister({...register,observacion:e.target.value})}/>
        </label>
       <button className='btn text-white bg-green-700 hover:bg-green-700/80'>Guardar</button>
      </div>
    </form>
    </>
    )
}

export default App
