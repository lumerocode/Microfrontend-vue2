<template>
    <aside>
        <section class="content">
            <div>
                <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Empresario</button>
                        <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Inversionista</button>
                    </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active container" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">

                        <div class="content-list" data-v-4615b107=""><div class="title" data-v-4615b107="">FACTORING</div> <ul class="list" data-v-4615b107=""><li data-v-4615b107=""><a href="/app/empresario/vender-facturas" data-v-4615b107="" class="">
                            Vender facturas
                        </a></li><li data-v-4615b107=""><a href="/app/empresario/mis-facturas" data-v-4615b107="" class="">
                            Mis facturas
                        </a></li><li data-v-4615b107=""><a href="/app/empresario/mis-pagos" data-v-4615b107="" class="">
                            Mis pagos
                        </a></li><li data-v-4615b107=""><a data-v-4615b107="" href="/app/empresario/mis-clientes" class="">
                            Mis clientes
                        </a></li></ul></div>

                    </div>
                    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                        Contenido de Inversionista
                    </div>
                </div>
            </div>


        </section>
    </aside>
</template>

<style lang="scss" scoped>

.content {
    background-color: #fff;
    border: 1px solid #e7e7ed;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 100vh;
    left: 0;
    max-height: calc(100% - 64px);
    max-width: 100%;
    overflow: visible;
    pointer-events: auto;
    position: fixed;
    top: 64px;
    transform: translateX(0);
    transition-duration: .2s;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    width: 257px;
    will-change: transform;
    z-index: 3;

    .nav-item {

        .nav-link {
            background-color: transparent;
            color: #00a4dd;
        }

        .active {
            color: #3d3d67;
            text-decoration: underline;
        }
    }

    .container {
        padding: 32px 0 60px 22px;
    }
}



    
</style>