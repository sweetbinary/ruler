function init_ruler(heighte,intt) {

    $(".js-ruler").html("");

    for (i = 1; i <= intt; i++) {
        var no = i * 10;
        var code = $(".js-ruler-example").html().replace("##",no);
        $(".js-ruler").append(code);
        //console.log(code);
    }
}