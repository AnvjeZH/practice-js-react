export default function Filter({value, onChange}) {
    return (
        <div style={{ width: '400px', margin: '30px auto 30px auto' }}>
        <label style={{ display: 'flex', flexDirection: 'row', gap: '10px', fontSize: '18px', alignItems: 'center'}}>
          Filter <input type="text" value={value} onChange={onChange} style={{width: '100%', height: '30px', fontSize: '18px', padding: '0 10px'}}/>
        </label>
      </div>
    )
}