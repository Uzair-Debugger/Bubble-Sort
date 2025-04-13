const insert = document.querySelector('#insert');
    const sort = document.querySelector('#sort');
    const input = document.querySelector('#input');
    const container = document.querySelector('#container');
    let arr = [];

    insert.addEventListener('click', function () {
      let num = parseInt(input.value);
      if (!isNaN(num)) {
        arr.push(num);
        input.value = '';
        render();
      }
    });

    // render ftn is used to create array element and apply highlight class on sorting

    function render(highlightIndices = []) { 
      container.innerHTML = '';
      arr.forEach((num, i) => {
        const node = document.createElement('div');
        node.classList.add('node');
        node.innerText = num;

        // Highlight if index is in swapping process otherwise just add element
        if (highlightIndices.includes(i)) {
          node.classList.add('highlight');
        }

        container.appendChild(node);
      });
    }

    // Applying Bubble Sort

    sort.addEventListener('click', async function () {
      for (let i = 0; i < arr.length - 1; i++) {

        for (let j = 0; j < arr.length - i - 1; j++) {

          render([j, j + 1]); // To highlight element for visual representation
          await delay(500);  

          if (arr[j] > arr[j + 1]) {
           
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;

            render([j, j + 1]); 
            await delay(500);   
          }
        }
      }
      render(); 
    });

    
    function delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }