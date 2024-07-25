import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
import NotFound from "./NotFound";

const TeacherDetails = () => {
  //!1.yol navigate yolladığı path e id yi gömerek yolladı, burada da useParams la id yi çektik*******

  //   const { id } = useParams();
  // // path ile yollanan id yi useParams hook uyla yakaladık
  //   const [person, setPerson] = useState({});
  //  const[error,setError]=useState(false)

  //   useEffect(() => {
  //     axios
  //       .get(`https://jsonplaceholder.typicode.com/users/${id}`)
  //       .then((res) => setPerson(res.data)).catch((err)=>setError(true))
  //   }, [id]);

  //! *********************
  // error durumlarında alttaki gibi js alanına yazılarak error sayfasına yönlendirme  yapılabilir
  // if(error){

  //   return <NotFound/>
  // }
  //!................
  // useEffect te [] içini boş bırakabilirim. çünkü zaten bu sayfaya kisi tıklanınca o kisinin id  si ile geliniyor ve bu sayfa tekrar çalışıyor, ama syntax gereği, id ye bağlı çalıştığı için [] içine id değiştiğinde çalış komutu verirsek herkes mutlu olur, yapmazsakta hata almayız
  //navigate(-sayı) ile sayı kaçsa o kadar sekme geri döner, yani sayı 2 ise 2 önce ziyaret ettiğimiz sayfaya döner
  //!2.yol
  //! useLocation.//  navigate ile gonderilen state'i yakalamak icin useLocation Hook'u kullanilabilir.
  //! Bu durumda veri, state ile geldigi icin yeniden fetch yapilmasina gerek kalmaz

  const {
    state: { person },
  } = useLocation();

  return (
    <div className="container text-center mt-4">
      <img
        src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${person.name}`}
        alt=""
      />
      <h3>{person.name}</h3>
      <h2>{person.email}</h2>
      <h5>{person.website}</h5>
      <h5>{person.phone}</h5>


      
    </div>

    
  );
};

export default TeacherDetails;
