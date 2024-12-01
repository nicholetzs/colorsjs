document.addEventListener("DOMContentLoaded", function() {
    const coresHTML = [
      "AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", 
      "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown",
      "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", 
      "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", 
      "DarkGray", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", 
      "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", 
      "DarkSlateBlue", "DarkSlateGray", "DarkTurquoise", "DarkViolet", "DeepPink", 
      "DeepSkyBlue", "DimGray", "DodgerBlue", "FireBrick", "FloralWhite", 
      "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", 
      "Gray", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", 
      "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", 
      "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", 
      "LightGray", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", 
      "LightSkyBlue", "LightSlateGray", "LightSteelBlue", "LightYellow", 
      "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", 
      "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", 
      "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", 
      "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", 
      "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", 
      "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", 
      "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple", 
      "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", 
      "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", 
      "SlateGray", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", 
      "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", 
      "YellowGreen"
    ];
  
    const coresAleatorias = coresHTML.sort(() => Math.random() - 0.5).slice(0, 10);
    const corSecreta = coresAleatorias[Math.floor(Math.random() * 10)];
    
    const targetColorEl = document.querySelector("#target-color span");
    const colorOptionsEl = document.getElementById("color-options");
    const feedbackEl = document.getElementById("feedback");
  
    // Função para gerar uma dica simples baseada no nome da cor
    function gerarDica(cor) {
        const nomeCor = cor.toLowerCase();
        
        // Usar o Set para garantir letras únicas
        const letrasUnicas = [...new Set(nomeCor)].slice(0, 3);
        
        // Se houver pelo menos 3 letras únicas, usar
        if (letrasUnicas.length < 3) {
          return `A cor tem menos de 3 letras únicas. As letras disponíveis são: ${letrasUnicas.join(", ")}.`;
        }
      
        // Caso contrário, dá as 3 primeiras letras únicas mesmo
        return `Aqui estão 3 letras únicas da cor: ${letrasUnicas.join(", ")}.`;
      }
      
  
    // Exibir as opções de cores
    coresAleatorias.forEach(cor => {
      const colorBox = document.createElement("div");
      colorBox.className = "w-10 h-10 rounded shadow relative cursor-pointer";
      colorBox.style.backgroundColor = cor;
  
      const colorName = document.createElement("span");
      colorName.className = "absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-xs text-center p-1";
      colorName.textContent = cor;
  
      colorBox.appendChild(colorName);
      colorOptionsEl.appendChild(colorBox);
  
      colorBox.addEventListener("click", () => {
        if (cor.toLowerCase() === corSecreta.toLowerCase()) {
          feedbackEl.textContent = `Você acertou! A cor era ${corSecreta}.`;
          document.body.style.backgroundColor = corSecreta;
        } else {
          feedbackEl.textContent = `Dica: ${gerarDica(corSecreta)}`;
        }
      });
    });
  });
  