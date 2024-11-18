const Role = require('../models/Role');
async function initializeRolesAndPermissions() {
    // Define basic permissions
    const permissions = {
        admin: [
            // 'create_department',
            'view_department',
            'update_department',
            'delete_department',
            'approve_department'
        ],
        pharmacist: [
            'create_department',
            'view_department',
            'update_department'
        ],
        qa_officer: [
            'view_department',
            'approve_department'
        ],
        operator: [
            'view_department'
        ]
    };

    // Create roles with permissions
    for (const [roleName, rolePermissions] of Object.entries(permissions)) {
        await Role.findOneAndUpdate(
            { name: roleName },
            { name: roleName, permissions: rolePermissions },
            { upsert: true }
        );
    }
}

module.exports = initializeRolesAndPermissions 