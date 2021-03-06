var generateId = function (type) {
    let randomId = Math.random()
        .toString(36)
        .substr(3, 9);
    return `${type}-${randomId}`;
};


/**
 * @class DiagramNode
 */
class DiagramNode {
    /**
     *  This should not be called directly. Use the "addNode" method from the DiagramModel class
     * @param  {String} title  [description]
     * @param  {Integer} x      [description]
     * @param  {Integer} y      [description]
     * @param  {Integer} width  [description]
     * @param  {Integer} height [description]
     * @param  {Integer} id [description]
     */
    constructor(id, title, x, y, width, height) {
        this.title = title;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.ports = [];
    }

    /**
     * Adds a new "in" port into the node.
     * @param {String} name
     * @return {Integer} The port id
     */
    addInPort(field, f_index) {
        let newPort = {
            id: field.alias+'_in',
            type: "in",
            f_index:f_index,
            field

        };

        this.ports.push(newPort);

        return newPort.id;
    }
    /**
     * Adds a new "out" port into the node.
     * @param {String} name
     * @return {Integer} The port id
     */
    addOutPort(field, f_index,) {
        let newPort = {
            id: field.alias+'_out',
            type: "out",
            f_index:f_index,
            field
        };

        this.ports.push(newPort);

        return newPort.id;
    }
}

export default DiagramNode;
