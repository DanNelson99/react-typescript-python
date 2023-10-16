import ReactFlow, { Controls, Panel } from 'reactflow';

const Mapper = () => {

    return (
        <ReactFlow>
            <Controls showInteractive={false} />
            <Panel position="top-left">React Flow Mind Map</Panel>
            <Panel position="top-right">React Flow Mind Map</Panel>
        </ReactFlow>
    )
};

export default Mapper;