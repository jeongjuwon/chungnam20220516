import { renderRelatedArticle } from './apis';

renderRelatedArticle('테슬라');

document.getElementById('btn').onclick = function(){
    const keyword = document.getElementById('keyword');
    renderRelatedArticle(keyword.value);
}