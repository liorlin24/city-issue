function toggletable() {/*дцдшд тм ферчцйд*/
    const neighborhood = document.getElementById('neighborhood_select').value;
    const garbageType = document.getElementById('garbage_type').value;
    const ksImage = document.querySelector('.ks_image');

    const allRows = document.querySelectorAll('tr');/*бзйшъ лм tr*/
    allRows.forEach(row => row.classList.remove('highlight-row'));/*дешгъ ошчеш одлм*/

    const allSchedules = document.querySelectorAll('.trash_waste_schedule');/*бзйшъ лм дгйб щоазсрйн аъ дибмаеъ*/
    allSchedules.forEach(item => {item.style.display = 'none';});/*дсъшъ дибмд*/
        
    const modal = document.getElementById('kebab_modal');
    modal.style.display = 'none';/*дсъшъ лм даморийн щм щййч чбб*/

    if (garbageType === 'kebab') {
        modal.style.display = 'block';/*ан рбзш щййч чбб арзре зещфйн аъ доегм*/
        const msgElement = document.getElementById('ashkenazi_msg');
        const recipeCard = document.getElementById('kebab_recipe_card');

        const takeover = document.querySelector('.recipe_takeover');
        if (takeover) takeover.style.display = 'block';/*зщйфъ дозмчд щм доълеп*/
        /*ан рбзш бтойгш*/
        if (neighborhood === 'amidar') {
            msgElement.innerText = "";/*рйчей дичси ощлереъ азшеъ*/
            recipeCard.style.display = 'block';/*дцвъ оълеп*/
            if (ksImage) ksImage.style.display = 'none';/*дсъшъ дъоерд */
        /*ан ма рбзш бтойгш*/
        } else {
            msgElement.innerText = "жаъ щлерд ащлржйъ огй, ъбзш бшоъ тойгш!";
            recipeCard.style.display = 'none';
            if (ksImage) ksImage.style.display = 'block';
        }
    /*бзйшъ сев ащфд езщйфъ дибмд дшмеерийъ*/
    } else if (garbageType === 'trash') {
        document.getElementById('trash_bin_table').style.display = 'block';
    } else if (garbageType === 'garden') {
        document.getElementById('garden_table').style.display = 'block';
    } else if (garbageType === 'buried') {
        document.getElementById('hidden_garbage_table').style.display = 'block';
    }
    /*оцйаъ дщлерд щрбзшд еошчеш щм дщешеъ доъайоеъ*/
    if (neighborhood) {
        const rowsToHighlight = document.querySelectorAll('.row-' + neighborhood);
        rowsToHighlight.forEach(row => { row.classList.add('highlight-row'); });
    }
}
/*дсъшъ лм дщййч чбб ан рмзх тм айчс*/
function closekebabModal() {
    document.getElementById('kebab_modal').style.display = 'none';
}