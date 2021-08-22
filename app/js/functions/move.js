const move = (elements) => {
  elements.forEach((element) => {
    window.addEventListener("mousemove", (e) => {
      let x = e.clientX / window.innerWidth;
      let y = e.clientY / window.innerHeight;
      element.style.transform = `perspective(300px) rotateX(${
        x * 10
      }deg rotateY(${y * 10}deg`;
    });
  });
};
export default move;
