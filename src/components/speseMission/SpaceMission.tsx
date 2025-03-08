import styles from './speseMission.module.css'
export default function SpaceMission() {

    let shipName: string = 'Союз';
    let crewCount: number = 4;
    let missionStarted: boolean = true;
    const crewNames: string[] = ['Гагарин Юрий', 'Титов Герман', 'Терешкова Валентина', 'Попович Павел'];
    const captain: readonly [string, number] = ['Гагарин Юрий', 35];
    console.log(shipName);
    console.log(crewCount);
    console.log(missionStarted);
    console.log(crewNames);
    console.log(captain);

    function startMission(shipName: string): string {
        return `Миссия ${shipName} началась!`;
    }

    const missionMessage = missionStarted ? startMission(shipName) : '';

    return (
      <div className={styles.container}>
        <h4>homework06</h4>
        <h2>Миссия Марс</h2>
        <p> Экипаж: {crewCount} человека</p>
        <p>Капитан: {captain.join(" ")} лет</p>

        <ul>
          {crewNames.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
       
        {missionMessage && (
          <p className={styles.missionMessage}>{missionMessage}</p>
        )}
      </div>
    );
}