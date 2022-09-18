

export const CreateCarButton = ({handleOpen}: {
    handleOpen: () => void
}) => {



    return(
        <button onClick={handleOpen} className="w-44 h-10 flex justify-center items-center rounded-md bg-gray-100 font-medium text-gray-800 gap-x-2" >
            Criar Registro  
            <img src="plus.svg" className="w-8 h-8" />
        </button>
    )
}