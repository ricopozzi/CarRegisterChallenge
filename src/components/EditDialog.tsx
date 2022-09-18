import { Dialog } from "@headlessui/react"
import { useAtom } from "jotai";
import { useForm } from "react-hook-form"
import { CarProps } from "../types/Car";
import { carAtom} from "../utils/carAtom"
import { editModalStateAtom } from "../utils/editModalStateAtom";

interface DialogProps {
    isOpen: boolean;
    handleOpen: () => void;
}

export const EditDialog =  ({isOpen, handleOpen}: DialogProps) => {
const [car,] = useAtom(carAtom)
const [, setModalState] = useAtom(editModalStateAtom)

const {handleSubmit, register, formState: {errors} } = useForm<CarProps>()

const onSubmit = async (data: CarProps) => {

    const result = await fetch(`http://api-test.bhut.com.br:3000/api/cars/${car?._id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'Application/json',
        },
        body: JSON.stringify({
            _id: car?._id,
            title: data.title,
            brand: data.brand,
            age: data.age,
            price: data.price,

        }   )
    })

     setModalState(false)
     return location.reload()
}

return (
    
    <Dialog 
    open={isOpen} 
    onClose={handleOpen}
    className="relative z-50"
    >
    <div className="fixed inset-0 flex items-center justify-center p-4 backdrop-blur-md bg-black/10" >
        <Dialog.Panel className="w-full max-w-sm rounded-md bg-white p-4">
        <Dialog.Title className="font-bold" >Editar carro</Dialog.Title>
        <Dialog.Description className="my-2 text-gray-500" >
            Editar informações do veículo 
        </Dialog.Description>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-y-4 my-2 pr-4">

            <label htmlFor="" className="flex gap-x-2 ml-auto font-light text-sm items-center" >
                Modelo
                <input 
                type="text" 
                {...register("title", {required: true})} 
                className="w-60 outline-none border border-gray-400 text-black text-sm rounded-md px-2 h-8"
                />
            </label>
            <label htmlFor="" className="flex gap-x-2 ml-auto font-light text-sm items-center" >
                Marca
                <input 
                type="text"
                {...register("brand", {required: true})} 
                className="w-60 outline-none border border-gray-400 text-black text-sm rounded-md px-2 h-8"
                />
            </label>
            <label htmlFor="" className="flex gap-x-2 ml-auto font-light text-sm items-center" >
                Ano
                <input 
                type="number"     
                {...register("age", {required: true})} 
                className="w-60 outline-none border border-gray-400 text-black text-sm rounded-md px-2 h-8"
                />
            </label>
            <label htmlFor="" className="flex gap-x-2 ml-auto font-light text-sm items-center" >
                Preço
                <input 
                type="text" 
                {...register("price", {required: true})} 
                className="w-60 outline-none border border-gray-400 text-black text-sm rounded-md px-2 h-8"
                />
            </label>

            <div className="w-full flex justify-center gap-x-4" >
                <button 
                type="button"
                className="w-28 h-9 bg-red-100 rounded-md text-red-600 font-medium" 
                onClick={handleOpen}
                >Fechar
                </button>

                <button 
                type="submit"
                className="w-28 h-9 bg-blue-100 rounded-md text-blue-600 font-medium"
                
                >
                    Editar
                </button>


            </div>
        
        </form>
        </Dialog.Panel>
    </div>

  </Dialog>

 )
}