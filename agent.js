class GameEvaluation extends Game {
    constructor(game) {
        super();
        this.data = JSON.parse(JSON.stringify(game.data));
        this.children = {};
        this.parent = null;
        this.score = game.score;
        this.bestChild = null;
    }

    copy() {
        let ret = new GameEvaluation(this);
        return ret;
    }

    evaluateNextStep() {
        for (let command of ["left", "right", "up", "down"]) {
            let next = this.copy();
            let result = next.advance(command);

            if (result.moves.length > 0) {
                this.children[command] = next;
                next.parent = this;
                next.move = command;
            } else {
                this.children[command] = null;
            }
        }
    }

    backPropagate() {
        let node = this;
        let score = this.score;
        while (node.parent) {
            if (node.parent.bestChild == null || node.parent.bestChild.score < score) {
                node.parent.bestChild = {
                    "move": node.move,
                    "score": score
                }
            }
            node = node.parent;
        }
    }
}

class GameAgent {
    constructor(game) {
        this.game = game;
    }
    
    evaluate(depth = 8) {
        let currGame = new GameEvaluation(this.game);
        let queue = [currGame];
        let nextQueue = [];

        for (let i = 0; i < depth; i++) {
            for (let g of queue) {
                g.evaluateNextStep();
                for (let cmd in g.children) {
                    if (g.children[cmd]) {
                        nextQueue.push(g.children[cmd]);
                    }
                }
            }
            queue = nextQueue;
            nextQueue = [];
        }

        for (let g of queue) {
            g.backPropagate();
        }
        
        return currGame.bestChild;
    }

    issueCommand(command) {
        let mapping = {
            "left": "ArrowLeft",
            "right": "ArrowRight",
            "up": "ArrowUp",
            "down": "ArrowDown"
        }

        var e = new KeyboardEvent("keydown", {"key": mapping[command]});
        document.dispatchEvent(e);
    }

    play(rounds = 10) {
        if (rounds > 0) {
            let result = this.evaluate();
            this.issueCommand(result.move);
            setTimeout(() => {
                this.play(rounds - 1);
            }, 200)
        }
    }
}