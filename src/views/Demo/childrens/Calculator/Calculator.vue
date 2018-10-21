<template>
    <div class="demo">
        <div class="title">计算器</div>
        <div class="calculator">
            <div class="display">{{current || '0'}}</div>
            <div class="btn" @click="clear">c</div>
            <div class="btn" @click="sign">+/-</div>
            <div class="btn" @click="percent">%</div>
            <div class="btn operator" @click="divide">÷</div>
            <div class="btn" @click="append('7')">7</div>
            <div class="btn" @click="append('8')">8</div>
            <div class="btn" @click="append('9')">9</div>
            <div class="btn operator" @click="times">×</div>
            <div class="btn" @click="append('4')">4</div>
            <div class="btn" @click="append('5')">5</div>
            <div class="btn" @click="append('6')">6</div>
            <div class="btn operator" @click="minus">-</div>
            <div class="btn" @click="append('1')">1</div>
            <div class="btn" @click="append('2')">2</div>
            <div class="btn" @click="append('3')">3</div>
            <div class="btn operator" @click="add">+</div>
            <div class="btn zero" @click="append('0')" style="border-bottom-left-radius: 10px;">0</div>
            <div class="btn" @click="dot">.</div>
            <div class="btn operator" @click="equal" style="border-bottom-right-radius: 10px;">=</div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            previous: null,
            current: '',
            operator: null,
            operatorClicked: false
        }
    },
    methods: {
        clear() {
            this.current = ''
        },
        sign() {
            if(!this.current) return;
            this.current = this.current.charAt(0) === '-' ? 
            this.current.slice(1) : `-${this.current}`;
        },
        percent() {
            this.current = `${parseFloat(this.current || '0') / 100}`
        },
        append(number) {
            if(this.operatorClicked) {
                this.current = "";
                this.operatorClicked = false;
            }
            this.current = `${this.current}${number}`;
        },
        dot() {
            if(!this.current) {
                this.append('0.')
            }
            else if(!this.current.includes('.')) {
                this.append('.')
            }
        },
        divide() {
            this.operator = (o,n) => o / n;
            this.previous = this.current;
            this.operatorClicked = true;
        },
        times() {
            this.operator = (o,n) => o * n;
            this.previous = this.current;
            this.operatorClicked = true;

        },
        minus() {
            this.operator = (o,n) => o - n;
            this.previous = this.current;
            this.operatorClicked = true;

        },
        add() {
            this.operator = (o,n) => o + n;
            this.previous = this.current;
            this.operatorClicked = true;

        },
        equal() {
            this.current =  `${this.operator(
                parseFloat(this.previous),
                parseFloat(this.current)
            )}`;
            this.previous = null;
        }
    }
}
</script>


<style lang="less" scoped>
.demo {
    position: absolute;
    background: #fff;
    padding: 10px;
    width: 100%;
    height: 100%;
}

.title {
    background-color: #dedede;
    margin: 0 auto;
    max-width: 400px;
    text-align: left;
    line-height: 1.5;
    padding: 5px 10px;
    font-size:1rem;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}
.calculator {
    margin: 0 auto;
    max-width: 400px;
    border-radius: 8px;
    display: grid;
    font-size: 2rem;
    line-height: 2;
    text-align: center;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(50px, auto)
}

.display {
    grid-column-start: 1;
    grid-column-end: 5;
    padding: 10px 15px;
    text-align: right;
    font-size: 3rem;
    line-height: 1.2;
    background: #353535;
    color: #fff;
}
.btn {
    background: #dedede;
    border: 1px solid #efefef;
}
.operator {
    color: #fff;
    background: orange;
}
.zero {
    grid-column-start: 1;
    grid-column-end: 3;
}
</style>

