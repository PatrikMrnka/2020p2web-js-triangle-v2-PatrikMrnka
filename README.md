# Obecný trojúhelník

Test na téma Javascript a manipululace s DOM

Vytvořte aplikaci počítající úhly, obvod a obsah libovolného trojúhelníka zadaného trojicí délek stran. Zadaný trojúhelník vykreslete pomocí SVG. Vzhled aplikace používá Bootstrap.

K dispozici máte: [html soubor](index.html), [doplňkový styl](styles/site.css) a [třídu pro výpočty](scripts/triangle.js). Veškeré zásahy do aplikace by se měly odehrát v souboru [index.js](scripts/index.js).

## Body zadání
1. Připojte použité soubory do souboru html
1. Navazujte veškeré akce skriptu až po načtení stránky
1. Načtěte do proměnných veškeré potřebné prvky z HTML souboru (prvky formuláře, výstupní pole skriptu, objekty čar v svg).
1. Získejte délky stran z adresního řádku prohlížeče. Například tedy index.html?a=3&b=4&c=5 vyplní formulářové prvky příslušnými délkami stran.
1. Vytvořte obsluhu reagující na odeslání formuláře a zabraňte jeho odeslání (a tedy znovunačtení stránky)
1. Pomocí třídy triangle se rozhodněte, zda trojúhelník lze sestrojit.
    1. Vytvořte v `<div id="result-feedback"></div>` nový alert informující uživatele, zda lze trojúhelník sestavit (success nebo danger).
1. Pokud je možné trojůhelník sestavit, naplňte příslušná pole velikostmi úhlů a dalšími atributy trojúhelníka (vlastnost value).
1. Pokud trojúhelník není možné sestrojit, naplňte výstupní pole textem "Nelze" dle přiložených screenshotů.
1. Třida triangle poskytuje také souřadnice vrcholů trojúhelníka. Vykreslete jej na ploše SVG prvku (naznačenou funkcí z připravenách čar).

## Screenshoty
Trojúhelník lze sestrojit

![Lze](/screenshots/canBeConstructed.jpg)

Trojúhelník nelze sestrojit

![Nelze](/screenshots/cannotBeConstructed.jpg)
