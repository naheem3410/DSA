
type GraphStructure = {
    [key:string]: string[]
}

const graphAdjList:{[key:string]:string[]} = {

}

class GraphAdjList{
    keys:string[] = []
    graphAdjList:{[key:string]:string[]} = {}

    addKey(key?:string, keys?:string[]){
        
        if(key){
            this.keys.push(key)
        }
        if(keys){
            this.keys = this.keys.concat(keys)
            console.log(this.keys)
        }
        
    }

    addNeighbor(key:string,neigbor:string[]){
        if(this.keys.includes(key)){
            this.graphAdjList[key] = neigbor
        }
        
    }

    print(){
        console.log(this.graphAdjList)
    }
}

class GraphAdjMatrix{
    keys:Map<string,number> = new Map()
    graphAdjMatrix:number[][] = []
    index = 0

    constructor(){

    }
    addKey(key:string){
        if(!this.keys.has(key)){
            this.keys.set(key,this.index)
            for(let row of this.graphAdjMatrix){
                row.push(0)
            }
            this.graphAdjMatrix.push(new Array(this.index + 1).fill(0))
            this.index++
        }
        
    }

    addNeighbor(key:string,neigbor:string[]){
        if(this.keys.has(key)){
            for (let item of neigbor){
                if(this.keys.has(item)){
                    this.graphAdjMatrix[this.keys.get(key)][this.keys.get(item)]=1
                }
                
            }
            
        }
        
    }

    print(){
        console.log(this.graphAdjMatrix)
    }
}

// let keys = ['A','B','C','D','E','F','G']

// let graph = new GraphAdjList()
// graph.addKey(undefined,keys)
// graph.addNeighbor("A",["D","E","C"])
// graph.addNeighbor("B",["C","F"])
// graph.addNeighbor("C",["A","E","F","B","G"])
// graph.addNeighbor("D",[])
// graph.addNeighbor("E",["A","C"])
// graph.addNeighbor("F",["C","B"])
// graph.addNeighbor("G",["C"])

// graph.print()

// let graph = new GraphAdjMatrix()
// graph.addKey("A")
// graph.addKey("B")
// graph.addKey("C")
// graph.addKey("D")
// graph.addKey("E")
// graph.addKey("F")
// graph.addKey("G")

// graph.addNeighbor("A",["D","E","C"])
// graph.addNeighbor("B",["C","F"])
// graph.addNeighbor("C",["A","E","F","B","G"])
// graph.addNeighbor("D",[])
// graph.addNeighbor("E",["A","C"])
// graph.addNeighbor("F",["C","B"])
// graph.addNeighbor("G",["C"])
// graph.print()

