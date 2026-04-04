import SubFooter from "@/components/footer/components/sub-footer";




const Home = () => {
  return (
    <>
       <div className="bg-[url('/imgs/hero-img.svg')]  bg-cover bg-center h-screen relative ">
         <div className="absolute inset-0 bg-[#1D3F34] opacity-50"></div>
        
       </div>
      <SubFooter
        title="هل تريد بيع أثاثك اليوم؟"
        description="تواصل معنا الآن واحصل على أفضل سعر لأثاثك المستعمل مع خدمة نقل مجانية ودفع فوري"
      />
    </>
  );
};

export default Home;
