const { createApp } = Vue;

createApp({
    data() {
        return {
            message: "Ciao Mondo",
            imgRef: "https://www.laprovinciadivarese.it/wp-content/uploads/2022/05/per-un-italiano-su-due-il-tramonto-e-il-momento-piu-atteso-dellestate_af908f02-7e99-11e7-bcd3-ae10ce1775ef_998_397_big_story_detail-690x362.jpg",
            imgAlt: "Immagine di un tramonto"
        }
    }
}).mount("#app")