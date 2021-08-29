let blues = document.querySelector(".blue-wrapper")
let reds = document.querySelector(".red-wrapper")
let yellows = document.querySelector(".yellow-wrapper")
let greens = document.querySelector(".green-wrapper")

createPawn("red-pawns", 4, reds);
createPawn("blue-pawns", 4, blues);
createPawn("green-pawns", 4, greens);
createPawn("yellow-pawns", 4, yellows);

function createPawn(cssClass, length, parentElem) {
    let collection = ``;
    for (let i = 0; i < length; i++) {
        let pawn = document.createElement("span");
        pawn.innerHTML = `
        <svg version="1.1" class="${cssClass} pawns" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
            <g>
                <g>
                    <path d="M256,0c-52.928,0-96,43.072-96,96s43.072,96,96,96s96-43.072,96-96S308.928,0,256,0z M256,170.667
                        c-41.173,0-74.667-33.493-74.667-74.667S214.827,21.333,256,21.333S330.667,54.827,330.667,96S297.173,170.667,256,170.667z"/>
                </g>
            </g>
            <g>
                <g>
                    <path d="M256,42.667c-29.419,0-53.333,23.936-53.333,53.333c0,5.888,4.779,10.667,10.667,10.667S224,101.888,224,96
                        c0-17.643,14.357-32,32-32c5.888,0,10.667-4.779,10.667-10.667S261.888,42.667,256,42.667z"/>
                </g>
            </g>
            <g>
                <g>
                    <path d="M350.976,176.768c-1.707-3.627-9.792-16-42.219-22.805c-5.675-1.173-11.392,2.475-12.629,8.256
                        c-1.195,5.76,2.475,11.413,8.256,12.629c16.683,3.52,23.851,8.277,26.283,10.219v12.395c-7.467,4.907-29.227,15.872-74.667,15.872
                        c-45.589,0-67.328-11.029-74.667-15.851v-12.245c2.752-2.304,9.963-6.976,26.283-10.368c5.781-1.216,9.472-6.869,8.256-12.629
                        c-1.237-5.781-6.933-9.451-12.629-8.256c-32.405,6.805-40.512,19.179-42.219,22.805c-0.661,1.429-1.024,2.965-1.024,4.544v21.333
                        c0,2.752,1.067,5.397,2.965,7.381c2.411,2.517,25.536,24.619,93.035,24.619s90.624-22.101,93.035-24.619
                        c1.899-1.984,2.965-4.629,2.965-7.381v-21.333C352,179.755,351.637,178.219,350.976,176.768z"/>
                </g>
            </g>
            <g>
                <g>
                    <path d="M371.563,410.133c-0.619-0.96-62.229-95.275-62.229-186.133c0-5.888-4.779-10.667-10.667-10.667S288,218.112,288,224
                        c0,80.597,43.392,160.811,59.733,188.16c-12.523,5.611-40.427,14.507-91.733,14.507c-51.371,0-79.296-8.896-91.733-14.485
                        C180.608,384.853,224,304.619,224,224c0-5.888-4.779-10.667-10.667-10.667s-10.667,4.779-10.667,10.667
                        c0,90.688-61.611,185.173-62.229,186.112c-2.987,4.544-2.091,10.624,2.112,14.101C145.472,426.645,173.653,448,256,448
                        s110.528-21.355,113.451-23.765C373.675,420.757,374.571,414.677,371.563,410.133z"/>
                </g>
            </g>
            <g>
                <g>
                    <path d="M354.581,373.675c-5.781-1.515-11.499,2.027-12.928,7.744s2.027,11.499,7.765,12.928
                        c23.68,5.952,44.117,16.768,45.248,21.653v38.613c-8.299,8.128-43.648,36.053-138.667,36.053
                        c-95.275,0-130.56-28.053-138.667-36.032l-0.021-38.528c1.152-4.992,21.589-15.829,45.269-21.781
                        c5.717-1.408,9.173-7.211,7.765-12.928c-1.451-5.717-7.317-9.259-12.928-7.744C138.944,378.261,96,391.637,96,416v42.667
                        c0,2.197,0.683,4.352,1.941,6.144C99.285,466.731,132.544,512,256,512s156.715-45.269,158.059-47.168
                        c1.259-1.792,1.941-3.947,1.941-6.144v-42.667C416,391.659,373.056,378.283,354.581,373.675z"/>
                </g>
            </g>
        </svg>`;
        collection += outerHTML(pawn);
    }

    parentElem.innerHTML = collection;
}

function outerHTML(node) {
    return node.outerHTML || new XMLSerializer().serializeToString(node);
}