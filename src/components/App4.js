import React, { useEffect, useRef } from "react";
import Two from "two.js";

const App4 = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Asegurarse de que Two.js solo se crea una vez
    const params = { width: 800, height: 600 };
    const two = new Two(params).appendTo(canvasRef.current);

    // Crear el rectángulo solo una vez
    const rect = two.makeRectangle(400, 300, 300, 200);
    rect.fill = "rgb(100, 150, 255)"; // Color sólido para el relleno
    rect.stroke = "#000"; // Borde negro
    rect.linewidth = 2;

    // Configurar el fondo del canvas (si es necesario)
    const canvas = two.renderer.domElement;
    canvas.style.backgroundColor = "white";

    // Solo actualizar cuando sea necesario
    //two.update();

    // Función para agregar un círculo al hacer clic
    const addCircle = (event) => {
      const { offsetX, offsetY } = event;
      console.log(`Clicked at: ${offsetX}, ${offsetY}`);

      // Verificar si el clic está dentro del rectángulo
      const rectBounds = {
        left: rect.translation.x - rect.width / 2,
        right: rect.translation.x + rect.width / 2,
        top: rect.translation.y - rect.height / 2,
        bottom: rect.translation.y + rect.height / 2,
      };

      if (
        offsetX >= rectBounds.left &&
        offsetX <= rectBounds.right &&
        offsetY >= rectBounds.top &&
        offsetY <= rectBounds.bottom
      ) {
        // Crear un círculo pequeño en la posición del clic
        const circle = two.makeCircle(offsetX, offsetY, 5);
        circle.fill = "red";
        circle.noStroke();
        two.update(); // Actualizar la escena después de agregar el círculo
      }
    };

    // Agregar evento de clic al canvas
    const canvasElement = two.renderer.domElement;
    canvasElement.addEventListener("click", addCircle);

    // Limpieza del evento
    return () => {
      canvasElement.removeEventListener("click", addCircle);
    };
  }, []);

  return <div ref={canvasRef}></div>;
};

export default App4;
