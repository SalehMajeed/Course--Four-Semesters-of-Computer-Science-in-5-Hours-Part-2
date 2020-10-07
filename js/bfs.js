const breadthFirstTraverse2 = (queue, array) => {
    if (!queue || !queue.length) return array;

    while (queue.length) {
        const node = queue.shift();
        array.push(node.value);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }

    return array;
};

const breadthFirstTraverse = (queue, array) => {
    if (!queue.length) return array;
    const node = queue.shift()
    array.push(node.value)
    if(node.left) queue.push(node.left)
    if(node.right) queue.push(node.right)
    return breadthFirstTraverse(queue, array)
};

// unit tests
// do not modify the below code
describe('tests', function () {
    const answer = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];

    const tree = {
        value: 'A',
        left: {
            value: 'B',
            left: {
                value: 'D',
                left: {
                    value: 'G',
                    left: null,
                    right: null,
                },
                right: null,
            },
            right: {
                value: 'E',
                left: null,
                right: {
                    value: 'H',
                    left: {
                        value: 'K',
                        left: null,
                        right: null,
                    },
                },
            },
        },
        right: {
            value: 'C',
            left: {
                value: 'F',
                left: {
                    value: 'I',
                    left: null,
                    right: null,
                },
                right: {
                    value: 'J',
                    left: null,
                    right: null,
                },
            },
            right: null,
        },
    };

    render(tree, answer);

    it('breadthFirstTraverse', () => {
        expect(breadthFirstTraverse([tree], [])).toEqual(answer);
        expect(breadthFirstTraverse2([tree], [])).toEqual(answer);
    });
});
