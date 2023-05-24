<template>
  <div id="summoner">
    <div class="summoner-match">
        <ul>
            <li class="matchList">
                <div class="matchList-wrap">
                    <div class="matchInfo">
                        <b>승리</b>
                        <p>15:57</p>
                        <p>3일전</p>
                    </div>
                    <div class="summoner-kda">
                        <p>15/5/7</p>
                        <p>2.1</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            summonerMatches: [],
        }
    },
    created(){
        axios('http://127.0.0.1:5000/search', {
            method: "get",
            params: {
                name: this.$route.params.id,
            },
        })
        .then(response => {
            console.log(response);
            this.summonerMatches = response.data;
        })
        .catch(error => {
            console.log(error);
        });          
    }
}
</script>

<style>
@import "../assets/css/reset.css";

#summoner {
    width: 100%; max-width: 1140px;
    margin: 0 auto;    
}

.summoner-match {

}

.matchList {
    width: 100%;
    margin-bottom: 10px;
    border-top: 1px solid #e6e6e6;
    border-bottom: 1px solid #e6e6e6;
    box-sizing: border-box;
}

.matchList-wrap {
    display: flex;
}

.matchInfo {
    width: 112px;
    text-align: center;
    padding: 20px 0;
}

.summoner-kda {

}

</style>