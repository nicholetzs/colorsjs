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
        
        // Dica 1: Primeira letra do nome da cor
        const primeiraLetra = nomeCor[0];
        
        // Dica 2: Última letra do nome da cor
        const ultimaLetra = nomeCor[nomeCor.length - 1];
        
        // Dica 3: Posição da primeira letra no alfabeto (A = 1, B = 2, ..., Z = 26)
        const posicaoAlfabeto = primeiraLetra.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
        
        return `
          Dica 1: A primeira letra da cor é "${primeiraLetra.toUpperCase()}". 
          Dica 2: A última letra da cor é "${ultimaLetra.toUpperCase()}". 
          Dica 3: A posição da primeira letra no alfabeto é ${posicaoAlfabeto}.`;
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
  