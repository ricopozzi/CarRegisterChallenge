import { useQuery, useQueryClient } from "@tanstack/react-query"
import { CarProps } from "../types/Car"
import { CarCard } from "./CarCard"
import { Blurhash, BlurhashCanvas } from "react-blurhash"


export const CarsList = () => {
    const queryClient = useQueryClient()

    const fetchCars = async () => {
        const response = await fetch("http://api-test.bhut.com.br:3000/api/cars")
  
        return response.json()
    }
  
    const { data: carsData, isLoading } = useQuery(["cars"], fetchCars)


    return(
        <main className="w-full lg:w-5/6 mx-auto border rounded-xl py-20 min-h-20 gap-20 flex items-center justify-center mt-3 mb-20 flex-wrap relative" >
            {isLoading ? (
                <>
                    <BlurhashCanvas
                        hash="LCS6PmOm~qeXEKrr~Wx]%IW@t8xV"
                        width={350}
                        height={200}
                        punch={1.4}
                        className="rounded-lg border"
                        
                    />
                      <BlurhashCanvas
                        hash="LCS6PmOm~qeXEKrr~Wx]%IW@t8xV"
                        width={350}
                        height={200}
                        punch={1.4}
                        className="rounded-lg border"
                        
                    />
                     <BlurhashCanvas
                        hash="LCS6PmOm~qeXEKrr~Wx]%IW@t8xV"
                        width={350}
                        height={200}
                        punch={1.4}
                        className="rounded-lg border"
                        
                    />
                </>
            ) : (
            <>
            {carsData?.map((car: CarProps, index: number) => {
                return (
                        <CarCard 
                        key={`Key-${index}`} 
                        title={car.title}
                        age={car.age}
                        brand={car.brand}
                        price={car.price}
                        _id={car._id}

                        />
                )
            })}
            </>
            )}
        </main>


    )
  
}