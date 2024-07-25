import React from 'react'
import Home from "../pages/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MyNavbar from "../components/MyNavbar";
import Teacher from "../pages/Teacher";
import CourseCard from "../pages/CourseCard";
import ContactForm from "../pages/ContactForm";
import Paths from "../pages/Paths";
import TeacherDetails from "../pages/TeacherDetails";
import NotFound from "../pages/NotFound";
import CardDetails from "../pages/CardDetails";
import FS from "../pages/FS";
import AWS from "../pages/AWS";
import PrivateRouter from "./PrivateRouter";
const AppRouter = () => {
  return (
    <Router>
      <MyNavbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* "/" (ana yol) tüm yollara dahil edilmiştir, bu nedenle onu "/" ile
          başlayan diğer yollardan ayırt etmek için exact anahtar kelimesine
          sahip olması gerekir . */}
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/teacher/:id" element={<TeacherDetails />} />
        {/* Route larda değişken tanımlayacaksak önüne süslü yerine : koyarız 
         "/courses/:name" böyle bir yolda yani  :name belirtilen kısım bir değişkendir, mesela name=HTML gibi. bunun için : kullanılır
        
        */}

        {/* teacher ve courses sayfaları details sayfalarına giderken kendileri görünmeyecek, sadece tıkladığım verinin bilgileri görünecek, nested route dan farklı */}
        <Route path="/courses" element={<CourseCard />} />
        <Route path="/courses/:name" element={<CardDetails />} />

        {/* şifre kontrolü ile girilebilecek sayfalar için PrivateRouter a yönlendirdir */}
        <Route path="/contact" element={<PrivateRouter />}>
          <Route path="" element={<ContactForm />} />
        </Route>

        {/* nested route : paths sayfası açıkken (paths gitmeden) altına extra sayfa açılsın istiyorum, paths sayfasında 2 buton var, navigate ile biri fs biri aws yollarını yolluyor buraya, bende paths sarmal route un içine self-closing route larla ikisinin açacağı sayfaları ekliyorum */}
        <Route path="/paths" element={<Paths />}>
          <Route path="/paths/fs" element={<FS />} />

          <Route path="aws" element={<AWS />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default AppRouter