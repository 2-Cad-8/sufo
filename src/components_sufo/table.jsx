

export default function Table({data}){
    return(
        <div className="overflow-x-auto">
            <table className="table table-sm w-md xl:max-w-4xl">
                <thead className="bg-stone-300/80">
                    <tr>
                        <th>Fecha</th>
                        <th>Descripcion</th>
                        <th>Modulo</th>
                        <th>Opcion</th>
                        <th>Observaciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((register,i)=> {
                        return(<tr key={register.id}>

                        <td>{register.fecha}</td>
                        <td>{register.descripcion}</td>
                        <td>{register.modulo}</td>
                        <td>{register.opcion}</td>
                        <td>{register.observaciones}</td>
                        </tr>)
                    })}
                    
                </tbody>
            </table>
        </div>
    )
}