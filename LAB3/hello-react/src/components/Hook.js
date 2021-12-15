import React,{ useState,useEffect } from "react";


function Hook(){
    const [color, setColor] = useState("red");
    const [color, setCount] = useState(0);
    const [multi, setMulti]
    const [car,setCar] = useState({
        brand: "Mazda",
        year: 2012,
        color: "red",
    });

    const updateCarColor = ()=> {
        setCar((preStatate)=>{
            return {...preStatate,color:"green"};
        });
    };

    useEffect(() => {
        document.title = 'change Stage ${count} : ${color}';
        setTimeout(() => {
            setMulti(() => count * 2);
        }, 1000);
    }, [count]);

    return <>Color is {color}</>;
    <>
        <p>Color is {color}</p>
        <button> onClick={()=> setColor(blue)}>Change</button>

        <p>Count is  {count}</p>
        <p>multi of count is {multi}</p>
        <button> onClick={() => setColor(count + 1)}>Inc</button>

        <p>
            {car.brand} Car color is {car.color}
        </p>
        <button> onClick={updateCarColor}>Corlor</button>
    </>
);
}

export defaulf Hook;