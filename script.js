document.addEventListener('DOMContentLoaded', () => {
    
    const buttons = document.querySelectorAll('.btn');
    const pratoItems = document.querySelectorAll('.prato-item');
    
    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const category = button.textContent.trim().toLowerCase();
        filterMenu(category);
      });
    });
  
    function filterMenu(category) {
      pratoItems.forEach((item) => {
        const itemCategory = item.querySelector('.prato').alt.toLowerCase();
        if (itemCategory.includes(category) || category === "todos") {
          item.style.display = "flex"; 
        } else {
          item.style.display = "none"; 
        }
      });
    }
  
    
    pratoItems.forEach(item => {
      item.addEventListener('mouseover', () => {
        item.classList.add('active');
      });
      
      item.addEventListener('mouseout', () => {
        item.classList.remove('active');
      });
    });
  
    
    let favoriteCount = 0;
  
    pratoItems.forEach(item => {
      const favoriteBtn = document.createElement('button');
      favoriteBtn.textContent = '❤️ Favoritar';
      favoriteBtn.classList.add('favorite-btn');
      item.querySelector('.detalhes').appendChild(favoriteBtn);
  
      favoriteBtn.addEventListener('click', () => {
        if (favoriteBtn.classList.contains('active-favorite')) {
          favoriteBtn.classList.remove('active-favorite');
          favoriteBtn.textContent = '❤️ Favoritar';
          favoriteCount--;
        } else {
          favoriteBtn.classList.add('active-favorite');
          favoriteBtn.textContent = '💔 Remover Favorito';
          favoriteCount++;
        }
        updateFavoriteCount();
      });
    });
  
    function updateFavoriteCount() {
      const favoriteCountDisplay = document.querySelector('.favorite-count');
      if (!favoriteCountDisplay) {
        const countElement = document.createElement('div');
        countElement.classList.add('favorite-count');
        countElement.style.position = 'fixed';
        countElement.style.bottom = '20px';
        countElement.style.right = '20px';
        countElement.style.backgroundColor = '#e67e22';
        countElement.style.padding = '10px 20px';
        countElement.style.color = '#fff';
        countElement.style.borderRadius = '50px';
        countElement.style.fontSize = '1.5rem';
        countElement.textContent = `Favoritos: ${favoriteCount}`;
        document.body.appendChild(countElement);
      } else {
        favoriteCountDisplay.textContent = `Favoritos: ${favoriteCount}`;
      }
    }
  
    
    const title = document.querySelector('.title h1');
    title.addEventListener('mouseover', () => {
      title.style.transition = 'all 0.3s ease';
      title.style.transform = 'scale(1.1)';
    });
  
    title.addEventListener('mouseout', () => {
      title.style.transform = 'scale(1)';
    });
  
    const allButton = document.createElement('button');
    allButton.textContent = 'Todos';
    allButton.classList.add('btn');
    allButton.addEventListener('click', () => {
      filterMenu('todos');
    });
    document.querySelector('.refeicoes').appendChild(allButton);
  });
  
  const updateBackground = () => {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 18) {
      document.body.style.backgroundColor = "#fdfdbb"; 
    } else {
      document.body.style.backgroundColor = "#2c3e50";
    }
  };
  
  updateBackground();
  