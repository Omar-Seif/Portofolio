

const SkillCard = ({ name, level }) => {
    return (
        <div className="bg-card p-6 rounded-lg shadow-xs card-hover">
            <h3 className="font-semibold text-lg">{name}</h3>
            <div className="bg-primary h-2 rounded-full origin-left"
                style={{ width: level + "%" }}>
            </div>
            <div className="flex justify-end">
                <p>{level}%</p>
            </div>
        </div>
    )
}

export default SkillCard
