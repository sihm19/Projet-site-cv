document.querySelectorAll(".sidebar a").forEach(link=>{
  link.addEventListener("click",e=>{
    e.preventDefault();
    const target = link.dataset.section;
    document.querySelectorAll(".sidebar a").forEach(a=>a.classList.remove("active"));
    document.querySelectorAll(".section").forEach(sec=>sec.classList.remove("active"));
    link.classList.add("active");
    document.getElementById(target).classList.add("active");
  });
});
