import { CarProps } from "../types/Car"
import { useAtom } from "jotai"
import { editModalStateAtom } from "../utils/editModalStateAtom"
import { carAtom } from "../utils/carAtom"
import { ensureDeleteStateAtom } from "../utils/EnsureDeleteStateAtom"


export const CarCard = ({title, age, brand, price, _id }: CarProps) => {

    const [, setModalState] = useAtom(editModalStateAtom)
    const [, setCar] = useAtom(carAtom)
    const [, setDeleteModalState ] = useAtom(ensureDeleteStateAtom)

    const priceFormatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency:"USD",
        maximumFractionDigits: 0
    })

    const handleEdit = () => {
        setCar({
            _id,
            age,
            brand,
            price,
            title
        })

        return setModalState(true)
    }

    const handleDelete = () => {
        setCar({
            _id,
            age,
            brand,
            price,
            title
        })

        return setDeleteModalState(true)
    }

    return (
        <>
            <div className="max-w-[22rem] w-full min-h-32 rounded-xl border relative px-3 gap-x-2 pb-3 pt-14 flex justify-center shadow-sm" >
                <div className="w-16 h-16 md:w-20 md:h-20 absolute left-0 right-0 -top-10 mx-auto shadow-xl rounded-full" >
                    <img src="/car.svg" className="w-full h-full" />
                </div>
                <div className="flex flex-col gap-y-4 text-sm lg:text-base mr-auto w-[50%]" >
                       <div className="w-full flex gap-x-1 font-normal text-gray-700 text-sm uppercase " >
                        {brand} {title} {age}
                       </div>

                    <div className="w-min flex p-2 mt-1 border border-teal-100 rounded-md bg-teal-50 text-teal-700 font-bold" >R{priceFormatter.format(Number(price))}</div>
                </div>

                <div className="w-[10rem] h-full my-auto flex flex-col justify-center items-center gap-y-4" >
                    <button onClick={handleEdit} className="w-[80%] h-8 bg-indigo-100 text-indigo-600 font-bold rounded-md" >
                        Editar
                    </button>

                    <button 
                    onClick={handleDelete} 
                    className="w-[80%] h-8 bg-red-100 text-red-600 font-bold rounded-md" >
                        Deletar
                    </button>
                </div>


            </div>
        </>
    )
}