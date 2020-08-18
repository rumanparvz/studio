
  function dgree(){
      var dgreefun = document.getElementById('dgreeid').value;

   if (dgreefun==='B.Sc(Engineering/Architecture)') {
       
    document.getElementById('dgreesub').innerHTML='<select class="form-control"><option> Select One</option> <option value="Architecture"> Architecture</option><option value="Aeronautical Engieneering"> Aeronautical Engieneering</option><option value="Computer science">Computer science </option><option value="Computer Engieneering">Computer Engieneering </option><option value="Cemical"> Cemical</option><option value="Civil">Civil </option><option value="Computer science & Engieneering">Computer science & Engieneering </option><option value="Computer Science & information Technology">Computer Science & information Technology </option><option value=" Electrical"> Electrical </option><option value="Electrical and Electronics"> Electrical and Electronics</option><option value="Electronic">Electronic </option><option value="Environmental Engieneering">Environmental Engieneering </option><option value="Genetic Engieneering">Genetic Engieneering </option><option value="Information and communication Technology">Information and communication Technology </option><option value="Industrial">Industrial </option><option value="Leather Technology"> Leather Technology</option><option value="Marine">Marine </option><option value="Mechanical"> Mechanical</option><option value="Metallurgy">Metallurgy </option><option value="Mineral"> Mineral</option><option value="Mining">Mining </option><option value=" Microwave Engieneering"> Microwave Engieneering </option><option value="Structural"> Structural</option><option value="Textile Technology"> Textile Technology</option><option value="Town Planning">Town Planning </option><option value="Tele-comunication Engineering">Tele-comunication Engineering </option><option value="Regional Planning">Regional Planning</option><option value="Naval Arvchitecture"> Naval Arvchitecture</option><option value="Physcial Planning"> Physcial Planning</option><option value="Urban Planing"> Urban Planing</option></select>'
   }else if(dgreefun==='B.Sc(Agricultural Science)'|| dgreefun==='M.B.B.S./B.D.S'|| dgreefun==='Honors'||dgreefun==='Pass Course'||dgreefun==='Fazil'||dgreefun==='Graduation Equivalent'){
    document.getElementById('dgreesub').innerHTML=' <input name="dgreegrp"class="form-control form-control-md" type="text">'
   }

    }

