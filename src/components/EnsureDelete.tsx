import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { useAtom } from 'jotai';
import { carAtom } from '../utils/carAtom';

interface DeleteProps {
    isOpen: boolean;
    handleOpen: () => void;
}

export const EnsureDelete = ({ isOpen, handleOpen}: DeleteProps) => {
  const [car, setCar] = useAtom(carAtom)

  const handleDelete = async () => {
    const response = await fetch(`http://api-test.bhut.com.br:3000/api/cars/${car?._id}`, {
        method: "DELETE"
    })

    setCar(null)
    handleOpen()
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
        <Dialog.Title className="font-bold text-center" >Tem certeza que você deseja deletar esse carro?</Dialog.Title>

        <div className='flex justify-center gap-x-3 w-full mt-4' >

            <button 
            className='w-28 h-9 bg-black/10 font-medium rounded-md'
            onClick={handleOpen}
            >Cancelar</button>
            <button 
            onClick={handleDelete}
            className='w-28 h-9 bg-red-100 rounded-md font-medium text-red-600'
            >Deletar</button>

        </div>
      </Dialog.Panel>
      </div>
    </Dialog>
  )
}